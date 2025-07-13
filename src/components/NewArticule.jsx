export const NewArticule = ({title, text}) => {
  return (
    <article className="min-h-[140px] lg-min-h-[160px] border-b-2 border-grayishBlue py-7 last:border-none lg:py-4">
        <h2 className="cursor-pointer hover:text-softOrange text-[20px] lg-text-[16px] font-bold mb-3 font-bold xl:text-[20px]">
        {title}
        </h2>
        <p className="text-[15px]">
        {text}
        </p>
    </article>
  )
}
