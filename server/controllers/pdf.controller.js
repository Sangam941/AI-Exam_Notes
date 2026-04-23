import pdfDocument from 'pdfkit'

export const downloadPdf = async (req,res)=>{
    try {
        const {notes, title} = req.body
        const doc = new pdfDocument()

        res.setHeader("Content-Type", "application/pdf")
        res.setHeader("Content-Disposition", "attachment; filename=notes.pdf")

        doc.pipe(res)

        //title
        doc.fontSize(20).text(title, {align:"center"})
        doc.moveDown()

        //notes
        doc.fontSize(12).text(notes)

        doc.end()
    } catch (error) {
        console.log("pdf error::", error)
    }
}