import React from 'react'
import './Home.css'
import { useSelector} from 'react-redux';
import data from './Data';








function Home() {
    const price = useSelector((state) => state.myprice.value);
    


    const quonchange = (event)=>  {
        const self_index = event.target.getAttribute("data-index");
        console.log(self_index);
    
        let quantityelements = document.querySelectorAll('.quantity')
        let quantity = [...quantityelements].filter((ele) => ele.getAttribute("data-index") == self_index)
        let mypriceelements = document.querySelectorAll('.price')
        let myprice = [...mypriceelements].filter((ele) => ele.getAttribute("data-index") == self_index)
        let subtotalelements = document.querySelectorAll('.subtotal')
        let subtotal = [...subtotalelements].filter((ele) => ele.getAttribute("data-index") == self_index)
        let grandtotalelements = document.querySelectorAll('.grandtotal')
        let grandtotal = [...grandtotalelements].filter((ele) => ele.getAttribute("data-index") == self_index)
        console.log(quantity[0].value);
        myprice[0].value = `${quantity[0].value * data[self_index].price}$`;
        console.log(myprice[0].value);
        subtotal[0].innerHTML = `${myprice[0].value}`;
        grandtotal[0].innerHTML = `${myprice[0].value}`;
    
    
    };


    





    function handleremovebtnclick(event) {
        console.log(price);

        const self_index = event.target.getAttribute("data-index");
        console.log(self_index);


        let quantityelements = document.querySelectorAll('.quantity')
        let quantity = [...quantityelements].filter((ele) => ele.getAttribute("data-index") == self_index)
        let mypriceelements = document.querySelectorAll('.price')
        let myprice = [...mypriceelements].filter((ele) => ele.getAttribute("data-index") == self_index)
        let subtotalelements = document.querySelectorAll('.subtotal')
        let subtotal = [...subtotalelements].filter((ele) => ele.getAttribute("data-index") == self_index)
        let grandtotalelements = document.querySelectorAll('.grandtotal')
        let grandtotal = [...grandtotalelements].filter((ele) => ele.getAttribute("data-index") == self_index)
        quantity[0].value = price;
        myprice[0].value = `${price}$`;
        subtotal[0].innerHTML = `${price}$`;
        grandtotal[0].innerHTML = `${price}$`;

    }







    return (
        <>
            <div>
                <nav className="navbar fixed-top navbar-light bg-light b-0">
                    <div className=" w-100 text-center bg-dark">
                        <a className="navbar-brand fw-bold fs-1 text-white" href="#">Dummy Navbar</a>
                    </div>
                </nav>

                <div className="container p-0" id='productinfo'>


                    {
                        data.map((item, index) => (
                            <div className='make-group rounded-top' key={index}>
                                <div className='row  p-4'>

                                    <div className='col-lg-2 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
                                        <div style={{ width: "120px", height: '120px' }}>
                                            <img className='text-center' src={item.thumbnail} alt={item.title} style={{ width: "100%", height: "100%" }} />
                                        </div>
                                    </div>


                                    <div className='col-lg-5 col-md-12 col-sm-12 text-start'>
                                        <h4>{item.title}</h4>
                                        <p className='spacedpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad beatae nihil unde vel aliquid quo praesentium corrupti saepe odit repellendus.</p>
                                        <p className='fw-bold'>sustainability</p>
                                    </div>


                                    <div className='col-lg-5 col-md-12 col-sm-12 text-end'>
                                        <form className='d-flex justify-content-end'>
                                            <label htmlFor="quantity" className='fw-bold'>Quantity: </label>
                                            <input type="number" className="quantity text-center border-0 me-1 " name="quantity" min="1" max="100" data-index={index} defaultValue={price} onChange={quonchange} />
                                            <label htmlFor="price" className='fw-bold'>Price: </label>
                                            <input type="text" className="price fw-bold text-center border-0 " name="price" size="6" data-index={index} defaultValue={`${price}$`} />
                                        </form>
                                        <button className='btn btn-sm  border border-dark text-danger fw-bold mt-5 removebtn' type="button" data-index={index} onClick={handleremovebtnclick}>REMOVE</button>
                                    </div>


                                </div>



                                <div className="row mx-3 border-top border-2">
                                    <div className="col-sm-6 text-start w-50"><p className='ms-5'>SUBTOTAL:</p></div>
                                    <div className="col-sm-6 text-end w-50"><p className='subtotal fw-bold' data-index={index}>0$</p></div>
                                </div>

                                <div className="row mx-3 border-bottom border-2 ">
                                    <div className="col-sm-6 text-start w-50"><p className='ms-5'>SHOPPING</p></div>
                                    <div className="col-sm-6 text-end w-50"><p className='fw-bold'>free</p></div>
                                </div>

                                <div className="row mx-3 mt-3">
                                    <div className="col-sm-6 text-start w-50"><p className='ms-5 fw-bold'>TOTAL:</p></div>
                                    <div className="col-sm-6 text-end w-50"><p className='grandtotal fw-bold' data-index={index}>0$</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 text-end"><p className='text-danger mx-4'><small>Get Daily Cash With Nespola Card</small></p></div>
                                </div>
                            </div>
                        ))
                    }







                </div>
            </div>


        </>

    )
}


export default Home;




