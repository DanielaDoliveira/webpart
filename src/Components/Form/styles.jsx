import tw from 'tailwind-styled-components';



export const ContainerForm = tw.div`
flex
flex-col
justify-center
align-center
md:w-full
  font-text
  m-10
  text-left

`
export const LabelForm = tw.label`
  block
  mb-2
  text-sm
  font-medium
  text-gray-300
  text-left
  
`
export const InputFOrm = tw.input`
  bg-zinc-700
  border
  border-gray-300
  text-gray-300
  text-sm
  
  rounded-lg
  focus:ring-amber-300
  focus:border-amber-300
  block-w-full 
  
  p-2.5
  lg:pr-80


`