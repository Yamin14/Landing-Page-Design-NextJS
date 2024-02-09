
'use client';
import Tool from "./Tool";

const Section = () => {

  //popular tools
  const popularTools = ['Word to PDF', 'PDF to PPT', 'PDF to Word', 'Edit PDF',
    'Compress image', 'Crop image', 'Resize image'];

  //return
  return (
    <div className="toolsContainer">

      {/* Your Bookmarks */}
      <div>
        <p className="text-white text-2xl font-bold mx-1 p-2">Bookmarks</p>
        
        <article>
          <Tool name='Word to PDF' />
          <Tool name='Edit PDF' />
          <Tool name='Compress image' />
          <Tool name='Crop image' />
        </article>
      </div>

      {/* Popular */}
      <div>
        <p className="text-white text-2xl font-bold mx-1 p-2">Popular</p>

        <article>

          {/* Slider */}
              {popularTools.map((tool, index) => {
                return (
                  <div key={index}>
                    <Tool name={tool} />
                  </div>);
              })}
        </article>
      </div>

      {/* Convert To PDF*/}
      <div>
        <p className="text-white text-2xl font-bold mx-1 p-2">Convert To PDF</p>
        
        <article>
          <Tool name='Word to PDF' />
          <Tool name='PPT to PDF' />
          <Tool name='Excel to PDF' />
        </article>
      </div>

      {/* Convert From PDF*/}
      <div>
        <p className="text-white text-2xl font-bold mx-1 p-2">Convert From PDF</p>

        <article>
          <Tool name='PDF to PPT' />
          <Tool name='PDF to Word' />
          <Tool name='PDF to Excel' />
          <Tool name='PDF to HTML' />
          <Tool name='PDF to Text' />
        </article>
      </div>

      {/* Image Tools */}
      <div>
        <p className="text-white text-2xl font-bold mx-1 p-2">Image Tools</p>
        <article>
          <Tool name='Compress image' />
          <Tool name='Crop image' />
          <Tool name='Resize image' />
          <Tool name='Rotate image' />
        </article>
      </div>

      {/* more tools */}
      <div className="flex justify-center m-4">
        <button className="bg-yellow-600 p-2 rounded-md hover:bg-yellow-700 hover:underline">More Tools</button>
      </div>
    </div>
  )
}

export default Section