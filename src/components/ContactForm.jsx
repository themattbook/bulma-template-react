export const ContactForm = () => {
    return (
        <section className='section hero-2'>
            <div className='container'>
                <div className='columns'>
                    <div className='column'>
                        <div className='card'>
                            <header className='card-header has-background-warning'>
                                <p className='card-header-title'>Free Consultation</p>
                            </header>
                            <div className='card-content'>
                                <div className='field'>
                                    <label className='label'>Name</label>
                                    <p className='control'>
                                        <input type='text' className='input' placeholder='Name' />
                                    </p>
                                </div>
                                <div className='field'>
                                    <label className='label'>Phone number</label>
                                    <p className='control'>
                                        <input type='text' className='input' placeholder='Phone number' />
                                    </p>
                                </div>
                                <div className='field'>
                                    <label className='label'>Email</label>
                                    <p className='control'>
                                        <input type='text' className='input' placeholder='Email' />
                                    </p>
                                </div>
                                <div className='field'>
                                    <p className='control'>
                                        <button className='button is-warning'>Submit</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='column has-text-white pt-6 pl-6'>
                        <span className='icon is-size-1 pb-6 my-3 has-text-grey-lighter'>
                            <i className='fas fa-quote-left'></i>
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore blanditiis eum modi
                            aliquid voluptatum quibusdam molestiae quisquam aliquam! Ratione architecto numquam
                            consequuntur veritatis a, praesentium eaque! Iste, delectus nihil.
                        </p>
                        <p className='has-text-weight-bold pt-3 is-size-4'>- John Doe</p>
                        <span className='icon is-size-1 pb-6 my-3 has-text-grey-lighter is-pulled-right'>
                            <i className='fas fa-quote-right'></i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
