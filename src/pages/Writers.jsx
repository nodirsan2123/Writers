import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import { getDate } from '../functions/functions'

export default function Writers() {
    const [load , setLoad] = useState(true)
    const [data, setData] = useState([])

    const getAutors = () => {
        axios.get("https://67659549410f849996558fa1.mockapi.io/writer")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.message);
            })
            .finally(() => {
                setLoad(false)
            })
    }

    
    
    useEffect(() => {
        getAutors()
    }, [])
    
    if(load){
        return <Loading />
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        data?.map((item) => {

                            return (
                                <div key={item.id} className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-64 md:h-44 w-full object-cover object-center" src={item.avatar} alt="blog" />
                                        <div className="p-6">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                <span>tug'ilgan yili: {getDate(item.birthday)}</span>
                                                <br />
                                                <span>vafot etgan yili: {getDate(item.deadat)}</span>
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.full_name}</h1>
                                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <div className="flex items-center flex-wrap ">
                                                <Link to={`/writer/${item.id}`}><span>Batafsil</span></Link>
                                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
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
