import useSearchForm from '../_hooks/useSeachForm';
import SearchFormView from './SearchForm.view';

const SearchFormContent = () => {
  const formData = useSearchForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ query }) => {
    console.log(`submitted: ${query}`);
  });
  return <SearchFormView formData={formData} onSubmit={onSubmit} />;
};

export default SearchFormContent;
