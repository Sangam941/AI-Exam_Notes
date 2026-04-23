import { api, baseUrl } from "./api";

export const pdfDownloader = async (notes, title) => {
    try {
        console.log("hello")
        console.log(`${baseUrl}/api/pdf/download-pdf`)
        const response = await api.post(
            '/pdf/download-pdf',
            { notes, title },
            { responseType: "blob" }
        );

        console.log("response ",response)

        if (!response || !response.data) {
            throw new Error('No PDF data received.');
        }

        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = title ? `${title.replace(/\s+/g, '_')}_AIExamNotes.pdf` : "AIExamNotes.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading PDF:', error);
        alert('Failed to download PDF. Please try again later.');
    }
};