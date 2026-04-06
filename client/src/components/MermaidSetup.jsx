import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
    startOnLoad: false,
    theme: "default"
})

const MermaidSetup = ({ diagram }) => {
    const ref = useRef(null);

    // Clean the diagram code from markdown formatting and unwanted characters
    const cleanDiagram = (code) => {
        if (!code) return '';
        return code
            .replace(/^\s*```mermaid\s*/i, "") // remove starting ```mermaid (allow leading whitespace)
            .replace(/\s*```\s*$/i, "") // remove trailing ```
            .replace(/\\n/g, "\n")
            .replace(/\r/g, "")
            .replace(/[^\x00-\x7F]/g, "") // remove non-ascii (may need to tweak if unicode support is wanted)
            .trim();
    };

    const hasMermaidDirective = (code) => {
        return /^(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|gantt|pie|mindmap|timeline)\b/im.test(code);
    };

    const toNodeId = (text, idx) => {
        const normalized = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "_")
            .replace(/^_+|_+$/g, "");
        return normalized ? `${normalized}_${idx}` : `node_${idx}`;
    };

    const toSafeLabel = (text) => String(text).replace(/"/g, '\\"');

    // Convert simple indented hierarchy text into Mermaid flowchart syntax.
    const buildFlowchartFromIndentedText = (rawText) => {
        const lines = rawText
            .split("\n")
            .map((line) => line.replace(/\t/g, "    "))
            .filter((line) => line.trim().length > 0);

        if (!lines.length) return "";

        const entries = lines.map((line, idx) => {
            const indentMatch = line.match(/^ */);
            const spaces = indentMatch ? indentMatch[0].length : 0;
            const depth = Math.floor(spaces / 2);
            const label = line.trim();
            return {
                idx,
                depth,
                label,
                id: toNodeId(label, idx)
            };
        });

        const stack = [];
        const edges = [];
        const declared = new Set();

        for (const node of entries) {
            while (stack.length && stack[stack.length - 1].depth >= node.depth) {
                stack.pop();
            }

            if (stack.length) {
                const parent = stack[stack.length - 1];
                edges.push(`${parent.id}["${toSafeLabel(parent.label)}"] --> ${node.id}["${toSafeLabel(node.label)}"]`);
                declared.add(parent.id);
                declared.add(node.id);
            } else if (!declared.has(node.id)) {
                edges.push(`${node.id}["${toSafeLabel(node.label)}"]`);
                declared.add(node.id);
            }

            stack.push(node);
        }

        return `flowchart TD\n${edges.join("\n")}`;
    };

    useEffect(() => {
        if (!diagram || !ref.current) {
            if (ref.current) ref.current.innerHTML = "";
            return;
        }

        const renderDiagram = async () => {
            try {
                ref.current.innerHTML = "";

                const uniqueId = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
                const cleaned = cleanDiagram(diagram);

                // Defensive: if empty, don't attempt to render
                if (!cleaned) return;

                const chart = hasMermaidDirective(cleaned)
                    ? cleaned
                    : buildFlowchartFromIndentedText(cleaned);

                const { svg } = await mermaid.render(uniqueId, chart);

                ref.current.innerHTML = svg;
            } catch (error) {
                if (ref.current) ref.current.innerHTML = '<p>Diagram Error</p>';
                // optional: log error
                console.error("Mermaid Error: ", error);
            }
        };

        renderDiagram();

        // Cleanup on unmount or diagram change
        return () => {
            if (ref.current) ref.current.innerHTML = "";
        };
    }, [diagram]);

    return (
        <div className='py-5'>
            <div ref={ref}/>
        </div>
    );
};

export default MermaidSetup