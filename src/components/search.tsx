import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../interface/product'
import { getProductSearch } from '../services/product'

const Search = () => {
    const { register, handleSubmit } = useForm();
    const [product, setProduct] = useState<IProduct[]>([])
    const [keyword, setKeyWord] = useState<string>('')
    const [isSearch, setIsSearch] = useState(false)

    const onHandlesSearch = async () => {
        const { data } = await getProductSearch(keyword, 999);
        setProduct(data);
    }

    const handleOutsideClick = async (e: any) => {
        if (e.target.closest('#listProduct') || e.target.closest('#clickShowProduct')) {
            return
        }
        setIsSearch(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])

useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await getProductSearch(keyword, 999);
            setProduct(data);
        };
        fetchProducts();
    }, [keyword]);

  return (
    <>
   <form className="flex items-center mr-auto " onSubmit={handleSubmit(onHandlesSearch)}>

<input
    className="block w-full h-10 px-5 py-2 outline-none hover:border-secondary border hover:border duration-200 rounded-s-lg"
    type="text"
    placeholder="Tim kiếm sản phẩm ..." {...register("_keywords")}
    onChange={(e) => setKeyWord(e.target.value)
    }
/>

<button id="clickShowProduct"
    type="submit"
    className="px-8 py-2  rounded d-r-lg bg-secondary"
    aria-label="Justify"
    onClick={() => setIsSearch(true)}
>
<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>

</button>

</form>
{isSearch &&
<div className="rounded-md z-50 absolute w-[530px] mt-5" id="listProduct">
    <div className="container  ">
        <div className="p-2 bg-white rounded-md">
            {/* check khong có sản phẩm nào thì hiển thị ra */}
            {product.length === 0 ? (
                <div className="text-center">
                    Không tìm thấy sản phẩm nào
                </div>
            ) : (
                product.map((product, index) => {
                    return (
                        <div key={index}>
                            <div className="grid grid-cols-[80px,auto] h-full p-2 border rounded-md border-slate-200 gap-y-5 focus:visible">
                                <div className="">
                                    <Link to="">
                                        <img
                                            src={product.image}
                                            alt="ảnh"
                                            className="transition duration-200 ease-in-out hover:scale-105 md:h-[30px] md:w-[30px]"
                                        />
                                    </Link>
                                </div>
                                <div className="gap-y-3">
                                    <Link
                                        to={'/detail/'+product.id}
                                        className="hover:text-yellow-500 transition duration-200"
                                    >
                                        {product.name}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div >
    </div >
</div >
}
    </>
  )
}

export default Search