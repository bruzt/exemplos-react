import React from 'react';
import styled from 'styled-components';


export default function DevListMain(props) {
    
    function renderDevs(){

        return props.devsState.map( (dev, index) => {

            return (
                <li className='dev-item' key={index}>
                    <header>
                        <img src={dev.avatar_url} alt={dev.github_username} />
                        <div className="user-info">
                            <strong>{dev.name}</strong>
                            <span>{dev.techs.join(', ')}</span>
                        </div>
                    </header>
                    <p>{dev.bio}</p>
                    <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
                </li>
            );
        });
    }

    return (
        <Main>
            <ul>
                {renderDevs()}
            </ul>
        </Main>
    );
}

const Main = styled.main`
    flex: 1;
    margin-left: 30px;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        li.dev-item {
            background: #FFF;
            box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
            border-radius: 2px;
            padding: 20px;

            header {
                display: flex;
                align-items: center;

                img {
                    width: 54px;
                    height: 54px;
                    border-radius: 50%;
                }

                .user-info {
                    margin-left: 10px;

                    strong {
                        display: block;
                        font-size: 16px;
                        color: #333;
                    }

                    span {
                        font-size: 13px;
                        color: #999;
                        margin-top: 2px;
                    }
                }
            }

            p {
                color: #666;
                font-size: 14px;
                line-height: 20px;
                margin: 10px 0;
            }

            a {
                color: #8e4dff;
                text-decoration: none;

                :hover {
                    color: #5e2ea6;
                }
            }
        }
    }

    @media (max-width: 650px){

        ul {
            grid-template-columns: 1fr;
        }
    }
`;