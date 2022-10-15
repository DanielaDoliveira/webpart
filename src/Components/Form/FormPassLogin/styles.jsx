import tw from 'tailwind-styled-components';



export const ContainerForm = tw.div`
flex
flex-col
justify-center
align-center

  font-text
  
  lg:m-10
  m-2
  mb-20

  text-left

`

export const DivForm  = tw.div`

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
  lg:pr-20
  md:pr-60
  pr-0


`