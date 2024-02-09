import Image from "next/image"

interface Props {
    name: String,
}

const Tool = ({name}: Props) => {

  //logo source and descriptions
  var source = '';
  var desc = '';
  
  //edit pdf
  if (name.includes("Edit PDF")) {
    source = 'https://images.hipdf.com/images2022/icons/editPDF.svg';
    desc = 'Use the best online tool to edit PDFs in your browser.';
  }

  //crop image
  if (name.includes("Crop image")) {
    source = 'https://images.hipdf.com/images2022/icons/crop-image.svg';
    desc = 'The fastest way to crop your image.';
  }

  //compress image
  if (name.includes("Compress image")) {
    source = 'https://images.hipdf.com/images2022/icons/compress-image.svg';
    desc = 'Free and online photo compressor.';
  }

  //resize image
  if (name.includes("Resize image")) {
    source = 'https://images.hipdf.com/images2022/icons/Resize-image.svg';
    desc = 'Easily resize image by defining a percentage.';
  }

  //rotate image
  if (name.includes("Rotate image")) {
    source = 'https://images.hipdf.com/images2022/icons/rotate-images.svg';
    desc = 'Easily rotate your image in the preferred direction.';
  }

  //pdf to word
  if (name.includes("PDF to Word")) {
    source = 'https://images.hipdf.com/images2022/icons/pdf-word.svg';
    desc = 'Easily convert PDF to Word document.';
  }

  //pdf to ppt
  if (name.includes("PDF to PPT")) {
    source = 'https://images.hipdf.com/images2022/icons/PDF-PPT.svg';
    desc = 'Convert PDF to Powerpoint online.';
  }

  //pdf to text
  if (name.includes("PDF to Text")) {
    source = 'https://images.hipdf.com/images2022/icons/PDF-TXT.svg';
    desc = 'Convert your PDF to TXT, and extract text from your PDF.';
  }

  //pdf to excel
  if (name.includes("PDF to Excel")) {
    source = 'https://images.hipdf.com/images2022/icons/pdf-excel.svg';
    desc = 'Convert PDF to xls for free.';
  }

  //pdf to html
  if (name.includes("PDF to HTML")) {
    source = 'https://images.hipdf.com/images2022/icons/pdf-html.svg';
    desc = 'Convert your PDF documents to HTML web page.';
  }

  //word to pdf
  if (name.includes("Word to PDF")) {
    source = 'https://images.hipdf.com/images2022/icons/word-pdf.svg';
    desc = 'The best Word to PDF converter online.';
  }

  //ppt to pdf
  if (name.includes("PPT to PDF")) {
    source = 'https://images.hipdf.com/images2022/icons/PPT-PDF.svg';
    desc = 'Convert Powerpoint to PDF online.';
  }

  //excel to pdf
  if (name.includes("Excel to PDF")) {
    source = 'https://images.hipdf.com/images2022/icons/Excel-PDF.svg';
    desc = 'Easily Convert Excel spreadsheet to PDF.';
  }

  //return
  return (
    <div className="flex flex-col m-2 p-2 w-36 h-44 md:w-48 md:h-40 border border-white rounded bg-blue-200 hover:shadow-md hover:shadow-blue-100 shadow- hover:cursor-pointer">
        <Image src={source} alt='' width={50} height={50} className="hover:cursor-pointer"/>
        <p className="text-black font-medium hover:cursor-pointer">{name}</p>
        <p className="text-gray-700 text-sm hover:cursor-pointer">{desc}</p>
    </div>
  )
}

export default Tool