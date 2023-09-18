import PropTypes from 'prop-types';

export const SectionCard = ({ icon, title, content, footerLink, footerText }) => {
    return (
        <div className='column'>
            <div className='card'>
                <div className='card-content'>
                    <div className='has-text-centered'>
                        <span className='icon is-size-1 py-6 my-3'>
                            <i className={icon}></i>
                        </span>
                    </div>
                    <p className='title is-4 has-text-centered'>{title}</p>
                    <div className='content has-text-centered'>{content}</div>
                </div>
                <footer className='card-footer'>
                    <a href={footerLink} className='card-footer-item'>
                        {footerText}
                    </a>
                </footer>
            </div>
        </div>
    );
};

SectionCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    footerLink: PropTypes.string.isRequired,
    footerText: PropTypes.string,
};
