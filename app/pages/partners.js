import React from 'react';
import { Page, Heading, LargeHeading, SmallHeading, Container, Pitch } from '../components/page';
import { Block, Header, Content, SubHeader, P} from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import Youtube from '../components/youtube';
import { Link } from '../components/link';
import partners1 from '../assets/partners_1.jpg';

const Partners = () => (
    <Page name='videos'>
        <Heading>
            <LargeHeading>Dear JavaZone Partners</LargeHeading>
            <SmallHeading>Join us in 2017</SmallHeading>
        </Heading>
        <Container>
            <Youtube id='cL57Ho55xpo'></Youtube>
        </Container>
        <Container>
            <Block>
                <Header>JavaZone 2017:<br />bigger and better than ever</Header>
                <Content>
                    <P>
                        JavaZone started out in 2001 as a small conference for Java developers, but has since then evolved
                        to become one of the largest developer conferences in the world. Each year thousands of people gather
                        in Oslo Spektrum for three full days of learning, mingling and fun.
                    </P>

                    <SubHeader>Completely. Sold. Out.</SubHeader>

                    <P>
                        Last year, a record breaking 3000 people attended JavaZone.
                        We were completely sold out of tickets AND partner stands.
                        This was a first for us, but based on feedback we assume that
                        we'll sell out this year as well. So join in early if you
                        want to be a part of the conference.
                    </P>
                </Content>
            </Block>

            <Block>
                <Header>Our philosophy:<br />partners, not sponsors</Header>

                <Content>
                    <P>
                        We want JavaZone‘s Expo area to be an attraction where the partners and participants can hang out and spend time together.
                        In the previous years, our partners have done a fantastic job to help us with this and we want to keep this tradition alive!
                        JavaZone’s Expo Area is always a vibrant, well-visited space full of life and activity.
                        As a partner, you are not just supporting our conference economically, you participate and help create it.
                        Please challenge us with your ideas for making the most out of your partner space.
                        Don’t be shy, there is little that is impossible.
                    </P>
                </Content>
            </Block>

            <img className='partners__image-one' src={partners1} />

            <Block>
                <Header>Partner Options</Header>
                <Content>
                    <P>
                        Even though all partners are considered equal, there are
                        a few options to consider. There is a base package that
                        everyone gets, and then there are a few availiable expansions with limited supply.
                    </P>

                    <SubHeader>Included in all partnerships</SubHeader>

                    <ul className='list'>
                        <li className='list__item'>
                            A stand in the Expo Area (6 square meters).
                        </li>
                        <li className='list__item'>
                            4 flexible, nameless expo tickets for the stand crew.
                        </li>
                        <li className='list__item'>
                            Discounted participant tickets for your employees.
                        </li>
                        <li className='list__item'>
                            Branding on <a href='http://javazone.no'>javazone.no</a>,
                            at the venue, the program, and other promotional material
                            JavaZone produces.
                        </li>
                    </ul>

                    <SubHeader>Possible expansions</SubHeader>

                    <dl className='definition-list'>
                        <dt className='definition-list__term'>
                            Double Stand Space
                        </dt>
                        <dd className='definition-list__data'>
                            Double you stand space and get 12 square meters instead of 6. This gives you a bigger wall for your message, and more floor space for your activities.
                        </dd>
                        <dt className='definition-list__term'>
                            Restaurant Stand
                        </dt>
                        <dd className='definition-list__data'>
                            We have room for a total of 8 restaurant stands in the Expo Area. The theme and menu is decided by you in collaboration with our food provider.
                            If you have a restaurant stand, you can also opt in for extra food servings and exposure during the evening party.
                        </dd>
                        <dt className='definition-list__term'>
                            Concept Stand
                        </dt>
                        <dd className='definition-list__data'>
                            We also have room for 2 extra large stands. These stands are about 70 square feet big, and have room for a 4 meter tall wall behind it. This is your choice if you want to be really creative.
                        </dd>
                    </dl>
                </Content>
            </Block>


            <CBlock fullWidth={true} className='partners__price-container'>
                <CHeader>Partnership Prices</CHeader>
                <CContent>
                    <P>
                        <div className="partners__mainprice">NOK 67.000,-</div>
                        All partnerships have a base price for entry which gives you everything described above. <br />We also have some addons described below.
                        <br />
                        <em className="partners__latebirdprice">After March 1st, the base price increases to NOK 82.000,-</em>
                    </P>
                    <div className='partners__prices'>
                        <div className='partners__stand-prices'>
                            <table className='table'>
                                <tbody>
                                    <tr className='table__row'>
                                        <td className='table__data'>Extra Stand Space</td>
                                        <td className='table__data'>NOK 30.000,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Restaurant Stand</td>
                                        <td className='table__data'>NOK 62.000,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Restaurant Stand (Evening)</td>
                                        <td className='table__data'>NOK 20.000,-</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Concept Stand</td>
                                        <td className='table__data'>NOK 47.000,-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='partners__ticket-prices'>
                            <table className='table'>
                                <tbody>
                                    <tr className='table__row'>
                                        <td className='table__data'>Partner Tickets (0 - 30)</td>
                                        <td className='table__data'>TBA</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Partner Tickets (31 - 50)</td>
                                        <td className='table__data'>TBA</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Partner Tickets (51 - ∞)</td>
                                        <td className='table__data'>TBA</td>
                                    </tr>
                                    <tr className='table__row'>
                                        <td className='table__data'>Partner Tickets (Late-Bird)</td>
                                        <td className='table__data'>TBA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CContent>
            </CBlock>

            <Block>
                <Header>Contact Us</Header>
                <Content>
                    <P>
                        JavaZone 2017 will be held in September, but please get in
                        touch sooner rather than later. Even though all stand
                        positions at JavaZone give you great exposure,
                        the partner stands (and especially some of the extra options) will sell out early.
                        Contact us at <a href='mailto:contact@java.no'>contact@java.no</a> today,
                        and we’ll work with you to create the best possible
                        partnership for you.
                    </P>
                </Content>
            </Block>
        </Container>

    </Page>
);

export default Partners;
