import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
	return (
		<React.Fragment>
			<Search isHome />
			{myList.length > 0 && (
				<Categories title='My List'>
					<Carousel>
						{myList.map(item => (
							<CarouselItem key={item.id} {...item} isList />
						))}
					</Carousel>
				</Categories>
			)}
			<Categories title='Trends'>
				<Carousel>
					{trends.map(item => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
			<Categories title='PlatziVideo originals'>
				<Carousel>
					{originals.map(item => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
		</React.Fragment>
	);
};

const mapStateToProps = state => {
	return {
		myList: state.myList,
		trends: state.trends,
		originals: state.originals
	};
};

export default connect(mapStateToProps, null)(Home);
