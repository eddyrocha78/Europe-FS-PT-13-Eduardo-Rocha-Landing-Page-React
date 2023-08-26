import React from 'react';
    
class Card extends React.Component {
    postData = [
        {id: 1, cardImg:"https://picsum.photos/200/300", cardTitle:"Card1 Title", cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", cardUrl: "https://picsum.photos/200/300"},
        {id: 2, cardImg:"https://picsum.photos/200/300", cardTitle:"Card2 Title", cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", cardUrl: "https://picsum.photos/200/300"},            
        {id: 3, cardImg:"https://picsum.photos/200/300", cardTitle:"Card3 Title", cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", cardUrl: "https://picsum.photos/200/300"},
        {id: 4, cardImg:"https://picsum.photos/200/300", cardTitle:"Card3 Title", cardText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", cardUrl: "https://picsum.photos/200/300"}
        ];

        render() {
            return (
                this.postData.map((cardData => {
                return (
                    <div key={cardData.id} className="card my-2 p-0" style={{maxWidth: "18rem"}}>
                        <img className="card-img-top" src={cardData.cardImg} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">{cardData.cardTitle}</h5>
                            <p className="card-text text-center">{cardData.cardText}</p>
                        </div>
                        <div className="card-footer text-center">
                            <button href={cardData.cardUrl} className="btn btn-primary">Find Out More!</button>
                        </div>
                    </div>
                )
                }))
            )
        };
};


export default Card;