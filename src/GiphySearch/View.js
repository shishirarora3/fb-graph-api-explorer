import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import Image from './Image';
import Loading from './Loading';
import Error from './Error';

const Pair = ({data}) => <ul className="column">{Object.keys(data).map(k => {
  const term = data[k];
  const isObject = typeof term === 'object';
  return isObject? <li className="row"><Pair data={term}/></li>: <ul className="row">
  {!['id','created_time', 'type'].includes(k) && [<li>{k}</li>,
    <li>{term}</li>]}
  </ul>}
)}</ul>;

const View = ({
                loading, error, data, initialQuery, onLoad,
                RenderSearchInput, RenderImage, RenderLoading, RenderError,
              }) => (
  <div>
    <style dangerouslySetInnerHTML={{__html: `
    ul,li{
    list-style-type: none;
    }
    .row{
      display: flex;
     }
     .row>li:not(:last-child):after{
     content: '|';
     width: 20px;
     display: inline-block;
     }
     .column{
      display: flex;
      flex-direction: column;
     }
    `}}/>
    <RenderSearchInput initialQuery={initialQuery} onSearch={onLoad}/>
    <section>

      {loading && <RenderLoading/>}

      {error && <RenderError error={error}/>}

      {data && <Pair data={data}/>}

    </section>
  </div>
);

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  initialQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  renderImage: PropTypes.func,
  renderLoading: PropTypes.func,
  renderError: PropTypes.func,
};

View.defaultProps = {
  RenderSearchInput: SearchInput,
  RenderImage: Image,
  RenderLoading: Loading,
  RenderError: Error,
};

export default View;
