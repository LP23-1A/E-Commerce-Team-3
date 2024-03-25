

const Drop = ({discount}:Number) => {
  return (
    <div className="absolute right-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="139" height="140" viewBox="0 0 139 140" fill="none">
  <path d="M39.665 132.813C-10.335 104.813 1.88843 82.5 3.38879 66.5C3.38879 56.9 26.8315 11.9793 35.6648 5.31264C41.1648 1.14598 58.8647 -3.68736 85.6647 10.3126C146.865 35.9126 141.498 79.3126 131.165 97.8126C123.665 118.479 94.8648 154.413 39.665 132.813Z" fill="#00C1FE" stroke="#00C1FE" strokeLinecap="round" strokeLinejoin="round"/>
  <text className=" text-[42px] font-[700]" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{discount}%</text>
</svg>
    </div>
  )
}

export default Drop
