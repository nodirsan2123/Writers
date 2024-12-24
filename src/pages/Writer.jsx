import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { getDate } from '../functions/functions';

export default function Writer() {
    const param = useParams();
    const [load, setLoad] = useState(true);
    const [autor, setAutor] = useState(null); // Obyekt uchun boshlang'ich qiymat null
    const [book, setBook] = useState([]);

    const getAutor = () => {
        setLoad(true);
        axios.get(`https://67659549410f849996558fa1.mockapi.io/writer/${param.id}`)
            .then((res) => {
                console.log(res.data);
                setAutor(res.data); // Obyektni o'rnatish
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setLoad(false);
            });
    };

    const getbooks = () => {
        axios.get(`https://67659549410f849996558fa1.mockapi.io/writer/${param.id}/books`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getAutor();
        getbooks();
    }, [param.id]);

    if (load) {
        return <Loading />;
    }

    return (
        <section className="text-gray-800 body-font">
            <div className="px-5 py-24 mx-auto flex justify-around">
                {autor && (
                    <div>
                        <h1 className="text-3xl font-bold my-4">{autor.full_name}</h1>
                        <img className='rounded-md w-[200px]' src={autor.avatar} alt={autor.name} />
                        <p className="mt-2">{getDate(autor.birthday)}da tug'ilgan.</p>
                    </div>
                )}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">Books:</h2>
                    <ul className='flex gap-5'>
                        {book.map((item) => (
                            <div>
                            <li key={item.id} className=" flex flex-col justify-center items-center gap-3 shadow-lg p-3 bg-slate-300 rounded-md">
                                <div className='flex flex-col text-black'>
                                <span>{item.name}</span>
                                <span>({item.created_date})</span>
                                </div>
                                <img className='w-[120px]' src={item.avatar} alt={item.name} />
                            </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
