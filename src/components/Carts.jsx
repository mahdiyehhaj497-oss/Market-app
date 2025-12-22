export default function Carts({title,price,image,body,category,id}) {
    return (
      <>
        <div className="block  w-60 h-atuo shadow-md p-3 font-serif ">
          <img className="w-44 h-32" src={image} />
          <div className=" p-2">
            <h3 className="font-xs">{title}</h3>
            <h3 className="font-xs text-sky-800">{price}</h3>
            <p className="font-xs">{body}</p>
            <span>{category}</span>
          </div>
        </div>
      </>
    );
}