import tw from 'tailwind-styled-components'

export const Div = tw.div`
md:w-8/12
 lg:w-5/12
  lg:ml-20

  font-text

`

export const Span = tw.span`


md:m-30
m-20
p-10

w-auto
flex
flex-col
justify-center
align-center
h-64

`
export const EmailDiv = tw.div`
mb-6
`
export const EmailInput = tw.input`
form-control
 block 
 w-auto
md:pr-40
px-5

py-2
md:text-xl
text-sm
font-normal
text-gray-700
bg-transparent
bg-clip-padding
border
border-solid
border-gray-300
rounded
transition ease-in-out
 m-0
focus:text-gray-100
focus:bg-zinc-700
 focus:border-gray-600
focus:outline-none 

`

export const DescLabel = tw.label`
  
block
text-left
mb-2
text-sm

font-bold
`
export const GeneralDivBtn = tw.div`
  
 
md:mr-20



`
export const DivBtn = tw.div`
inline-block
lg:mr-80



md:ml-20
w-full
justify-center



`
export const BtnContainer = tw.div`

m-3
md:mb-5



`

export const CheckDiv = tw.div`
form-group 
form-check
`
export const CheckInput = tw.input`
form-check-input 
appearance-none 
h-4 
w-4 
border 
border-gray-300 
rounded-sm 
bg-transparent 
checked:bg-zinc-700
checked:border-gray-100 
focus:outline-none 
transition duration-200 
mt-1 
align-top 
bg-no-repeat 
bg-center 
bg-contain 
 d

 cursor-pointer 
`
export const CheckLabel = tw.label`
form-check-label
 inline-block 
 text-gray-100

 md:text-sm
 text-xs
 ml-2



`

export const DivRememberForgot = tw.div`
flex 

flex-col
justify-between 
items-center 
mb-6
font-bold

`
export const AForgot = tw.a`
text-gray-100
md:text-sm
text-xs
mt-4
underline


`

export const PRegister = tw.p`
flex-col
text-sm 
font-semibold 
mt-2 
pt-1 
mb-0

`

export const ARegister = tw.a`

text-amber-200
hover:text-amber-700 
focus:text-red-700 
transition 
duration-200 
ease-in-out
m-2
text-center
`