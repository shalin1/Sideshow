export const fetchCategories = () =>
	$.ajax({
		method: 'GET',
		url: 'api/categories'
	});

export const fetchCategory = categoryId => {
	return $.ajax({
		method: 'GET',
		url: `api/categories/${categoryId}`
	});
};

export const createCategory = category => {
	return $.ajax({
		method: 'POST',
		url: 'api/categories/',
		data: { category }
	});
};

export const updateCategory = category => {
	return $.ajax({
		method: 'POST',
		url: 'api/categories/',
		data: { category }
	});
};

export const removeCategory = eventId => {
	return $.ajax({
		method: 'DELETE',
		url: `api/categories/${categoryId}`
	});
};

export const createCategoryMembership = categoryMembership => {
	return $.ajax({
		method: 'POST',
		url: 'api/category_memberships/',
		data: { categoryMembership }
	});
};
