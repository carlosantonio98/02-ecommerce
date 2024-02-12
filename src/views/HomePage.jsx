import { Navbar } from "../components/Navbar";

export const HomePage = () => {
    const listShirts = [
        {id: 1, url:'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20985323_fpx.tif?$thumb$&wid=319', colors: [
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21900119_fpx.tif?$thumb$&wid=224',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16518179_fpx.tif?$browse$&wid=319&fmt=webp',
            'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20115703_fpx.tif?$thumb$&wid=319',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8796569_fpx.tif?$browse$&wid=319&fmt=webp'
        ]},
        {id: 2, url:'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21900119_fpx.tif?$thumb$&wid=224', colors: [
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21900119_fpx.tif?$thumb$&wid=224',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16518179_fpx.tif?$browse$&wid=319&fmt=webp',
            'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20115703_fpx.tif?$thumb$&wid=319',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8796569_fpx.tif?$browse$&wid=319&fmt=webp'
        ]},
        {id: 3, url:'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16518179_fpx.tif?$browse$&wid=319&fmt=webp', colors: [
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21900119_fpx.tif?$thumb$&wid=224',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16518179_fpx.tif?$browse$&wid=319&fmt=webp',
            'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20115703_fpx.tif?$thumb$&wid=319',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8796569_fpx.tif?$browse$&wid=319&fmt=webp'
        ]},
        {id: 4, url:'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20115703_fpx.tif?$thumb$&wid=319', colors: [
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21900119_fpx.tif?$thumb$&wid=224',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16518179_fpx.tif?$browse$&wid=319&fmt=webp',
            'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20115703_fpx.tif?$thumb$&wid=319',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8796569_fpx.tif?$browse$&wid=319&fmt=webp'
        ]},
        {id: 5, url:'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8796569_fpx.tif?$browse$&wid=319&fmt=webp', colors: [
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21900119_fpx.tif?$thumb$&wid=224',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16518179_fpx.tif?$browse$&wid=319&fmt=webp',
            'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20115703_fpx.tif?$thumb$&wid=319',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8796569_fpx.tif?$browse$&wid=319&fmt=webp'
        ]},
        {id: 6, url:'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/22372169_fpx.tif?$browse$&wid=319&fmt=webp', colors: [
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21900119_fpx.tif?$thumb$&wid=224',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16518179_fpx.tif?$browse$&wid=319&fmt=webp',
            'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20115703_fpx.tif?$thumb$&wid=319',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8796569_fpx.tif?$browse$&wid=319&fmt=webp'
        ]},
        {id: 7, url:'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/22225736_fpx.tif?$browse$&wid=319&fmt=webp', colors: [
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21900119_fpx.tif?$thumb$&wid=224',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16518179_fpx.tif?$browse$&wid=319&fmt=webp',
            'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20115703_fpx.tif?$thumb$&wid=319',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8796569_fpx.tif?$browse$&wid=319&fmt=webp'
        ]},
        {id: 8, url:'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/22525416_fpx.tif?$browse$&wid=319&fmt=webp', colors: [
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/21900119_fpx.tif?$thumb$&wid=224',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/16518179_fpx.tif?$browse$&wid=319&fmt=webp',
            'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/20115703_fpx.tif?$thumb$&wid=319',
            'https://slimages.macysassets.com/is/image/MCY/products/9/optimized/8796569_fpx.tif?$browse$&wid=319&fmt=webp'
        ]},
    ];

    const onChangeImage = (idImage, idCanva, event) => {
        event.preventDefault();

        const canva = document.getElementById( idCanva );
        const shirts = listShirts.filter( shirt => shirt.id == idCanva)[0]['colors'];
        
        canva.setAttribute('src', shirts[idImage]);
    }

    return (
        <>

            <div className="container-fluid">
                <Navbar />

                <h5 className="my-3">Shop by Category</h5>

                <div className="row w-100 m-0 mb-3 ">

                    <div className="col-6 col-md-4 col-lg-3">
                        <a href="#" className="text-decoration-none text-dark">
                            <div className="card w-100 mb-4">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <img className="option-category__img" src="https://slimages.macysassets.com/is/image/McomMedia/media/AllMensClothingActivewear11344110_1482546.jpg" alt="Activewear" />
                                    <p className="m-0">Activewear</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className="col-6 col-md-4 col-lg-3">
                        <a href="#" className="text-decoration-none text-dark">
                            <div className="card w-100 mb-4">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <img className="option-category__img" src="https://slimages.macysassets.com/is/image/McomMedia/media/AllMensClothingJeansPants614000_1482548.jpg" alt="Activewear" />
                                    <p className="m-0">Jeans & Pants</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <a href="#" className="text-decoration-none text-dark">
                            <div className="card w-100 mb-4">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <img className="option-category__img" src="https://slimages.macysassets.com/is/image/McomMedia/media/AllMensClothingShirts12263420_1482550.jpg" alt="Shirts" />
                                    <p className="m-0">Shirts</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <a href="#" className="text-decoration-none text-dark">
                            <div className="card w-100 mb-4">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <img className="option-category__img" src="https://slimages.macysassets.com/is/image/McomMedia/media/AllMensClothingShoesBoots14537657_1482552.jpg" alt="Shoes & Boots" />
                                    <p className="m-0">Shoes & Boots</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <a href="#" className="text-decoration-none text-dark">
                            <div className="card w-100 mb-4">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <img className="option-category__img" src="https://slimages.macysassets.com/is/image/McomMedia/media/AllMensClothingSweatersSweatshirts1500400_1482557.jpg" alt="Sweaters & Sweatshirts" />
                                    <p className="m-0">Sweaters & Sweatshirts</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <a href="#" className="text-decoration-none text-dark">
                            <div className="card w-100 mb-4">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <img className="option-category__img" src="https://slimages.macysassets.com/is/image/McomMedia/media/AllMensClothingSuitsTuxedos7827424_1482561.jpg" alt="Suits & Tuxedos" />
                                    <p className="m-0">Suits & Tuxedos</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <a href="#" className="text-decoration-none text-dark">
                            <div className="card w-100 mb-4">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <img className="option-category__img" src="https://slimages.macysassets.com/is/image/McomMedia/media/AllMensClothingCoatsJackets12593453_1482563.jpg" alt="Coats & Jacked" />
                                    <p className="m-0">Coats & Jacked</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <a href="#" className="text-decoration-none text-dark">
                            <div className="card w-100 mb-4">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <img className="option-category__img" src="https://slimages.macysassets.com/is/image/McomMedia/media/AllMensClothingUnderwearSocks6302700_1482566.jpg" alt="Underwear & Socks" />
                                    <p className="m-0">Underwear & Socks</p>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="d-flex justify-content-between mb-5">
                    <h5>All Men's Clothing (14,754)</h5>

                    {/* Filter */}
                    <div className="dropdown">
                        <button className="btn btn-outline dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Featured items</a></li>
                            <li><a className="dropdown-item" href="#">Price: Low to High</a></li>
                            <li><a className="dropdown-item" href="#">Price: High to Low</a></li>
                            <li><a className="dropdown-item" href="#">Best seller</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <h6>Filter by</h6>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Offers
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body d-flex flex-column">
                                        <label className="mb-3"><input type="checkbox" name="offer-one" id="" /> Limited-Time Special (2074)</label>
                                        <label className="mb-3"><input type="checkbox" name="offer-two" id="" /> Special Offer (10)</label>
                                        <label className="mb-3"><input type="checkbox" name="offer-three" id="" /> Clearance/Closeout (1159)</label>
                                        <label className="mb-3"><input type="checkbox" name="offer-four" id="" /> Last Act (259)</label>
                                        <label className="mb-3"><input type="checkbox" name="offer-five" id="" /> Sales & Discounts (3354)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Discount Range
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body d-flex flex-column">
                                        <label className="mb-3"><input type="checkbox" name="discount-one" id="" /> 80% off & more (1)</label>
                                        <label className="mb-3"><input type="checkbox" name="discount-two" id="" /> 70% off & more (63)</label>
                                        <label className="mb-3"><input type="checkbox" name="discount-three" id="" /> 60% off & more (365)</label>
                                        <label className="mb-3"><input type="checkbox" name="discount-four" id="" /> 50% off & more (682)</label>
                                        <label className="mb-3"><input type="checkbox" name="discount-five" id="" /> 40% off & more (974)</label>
                                        <label className="mb-3"><input type="checkbox" name="discount-five" id="" /> 30% off & more (1020)</label>
                                        <label className="mb-3"><input type="checkbox" name="discount-five" id="" /> 20% off & more (3262)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Department
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body d-flex flex-column">
                                        <label className="mb-3"><input type="checkbox" name="department-one" id="" /> Activewear (7)</label>
                                        <label className="mb-3"><input type="checkbox" name="department-two" id="" /> Jewelry (19)</label>
                                        <label className="mb-3"><input type="checkbox" name="department-three" id="" /> Men (197)</label>
                                        <label className="mb-3"><input type="checkbox" name="department-four" id="" /> Men's Shoes (43)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Gender
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body d-flex flex-column">
                                        <label className="mb-3"><input type="checkbox" name="gender-one" id="" /> Women (17)</label>
                                        <label className="mb-3"><input type="checkbox" name="gender-two" id="" /> Men (1157)</label>
                                        <label className="mb-3"><input type="checkbox" name="gender-three" id="" /> Unisex (24)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        Category
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body d-flex flex-column">
                                        <label className="mb-3"><input type="checkbox" name="category-one" id="" /> Bracelets (4)</label>
                                        <label className="mb-3"><input type="checkbox" name="category-two" id="" /> Earrings (1)</label>
                                        <label className="mb-3"><input type="checkbox" name="category-three" id="" /> Necklaces (10)</label>
                                        <label className="mb-3"><input type="checkbox" name="category-three" id="" /> Rings (1)</label>
                                        <label className="mb-3"><input type="checkbox" name="category-three" id="" /> Socks (1)</label>
                                        <label className="mb-3"><input type="checkbox" name="category-three" id="" /> Watches (7)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        Price
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body d-flex flex-column">
                                        <label className="mb-3"><input type="checkbox" name="price-one" id="" /> Under $50 (2444)</label>
                                        <label className="mb-3"><input type="checkbox" name="price-two" id="" /> $50 - $100 (442)</label>
                                        <label className="mb-3"><input type="checkbox" name="price-three" id="" /> $100 - $250 (256)</label>
                                        <label className="mb-3"><input type="checkbox" name="price-three" id="" /> $250 - $500 (105)</label>
                                        <label className="mb-3"><input type="checkbox" name="price-three" id="" /> $1000 & above (125)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row w-100 m-0 mb-3">
                            {   listShirts.map(shirt => (
                                    <div key={ shirt.id } className="col-6 col-md-4">
                                        <div className="card w-100 mb-4 border-0 card-clothing">
                                            <div className="card-body">
                                                <div className="w-100 h-50 card-clothing__img">
                                                    <a href="#"><img className="w-100 h-100 fit-cover" src={ shirt.url } id={ shirt.id } /></a>
                                                </div>

                                                <div className="card-clothing__description mt-3">
                                                    <div className="d-flex mb-3">
                                                        <a href="#" onClick={ ( event ) => onChangeImage(0, shirt.id, event) } className="animation circle circle--active circle--small circle--black me-2"></a>
                                                        <a href="#" onClick={ ( event ) => onChangeImage(1, shirt.id, event) } className="animation circle circle--small circle--gray me-2"></a>
                                                        <a href="#" onClick={ ( event ) => onChangeImage(2, shirt.id, event) } className="animation circle circle--small circle--blue me-2"></a>
                                                        <a href="#" onClick={ ( event ) => onChangeImage(3, shirt.id, event) } className="animation circle circle--small circle--red"></a>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <a href="#" className="card-clothing__name"><p className="m-0">ID Ideology Men's Solid Fleece Hoodie, Created for Macy's</p></a>
                                                        <a href="#" className="card-clothing__like"><i className="fa-regular fa-heart fs-5"></i></a>
                                                    </div>
                                                    <span className="fw-bolder d-block mt-1 card-clothing__price">$MXN248</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
