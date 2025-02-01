import React from 'react'

function ColumnLayout({layout}) {
  return (
    <div>
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${layout?.numOfColumns},1fr)`,
            gap:'0px'
        }}>
            {Array.from({length:layout?.numOfColumns}).map((item, index) => (
                <div key={index} className="bg-gray-100 p-2 flex items-center border border-dashed justify-center">
                    {index+1}
                </div>
            ))}
        </div>
    </div>
  )
}

export default ColumnLayout;