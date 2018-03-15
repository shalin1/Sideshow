export const PAGE_IS_LOADING = 'PAGE_IS_LOADING';
export const PAGE_FINISHED_LOADING = 'PAGE_FINISHED_LOADING';

export const pageIsLoading = () => ({
	type: PAGE_IS_LOADING
});

export const pageFinishedLoading = () => ({
	type: PAGE_FINISHED_LOADING
});
