import React from 'react';
import SingleApp from '../SingleApp/SingleApp';

const SearchData = ({filterdata}) => {
	// console.log(filterdata);
	
	return (
		<div>
			{
				filterdata.map(singleapp => <SingleApp key={singleapp.id} singleapp={singleapp}></SingleApp>)
			}
		</div>
	);
};

export default SearchData;