import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'

export default function Books() {
    const [book, setBook] = useState([])
    const [load , setLoad] = useState(true)

    const getBooks = () => {
        setLoad(true)
        axios.get(`https://67659549410f849996558fa1.mockapi.io/books`)
            .then((res) => {
                setBook(res.data)
            }).catch((err) => {
                console.log(err.message);
            }).finally(() => {
                setLoad(false)
            })
    }

    useEffect(() => {
        getBooks()
    }, [])

    if(load){
        return <Loading />
    }

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                    {
                        book?.map((item) => {
                            return (
                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-gray-200 bg-opacity-40 p-6 rounded-lg">
                                        <img class="h-56 rounded w-full object-cover object-center mb-6" src={item.avatar} alt="content"/>
                                            <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">{item.created_date+"da yozilgan"}</h3>
                                            <h2 class="text-lg  font-medium title-font mb-4">{item.name}</h2>
                                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
