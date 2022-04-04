import './spacer.css';

function Spacer(content) {
  if ('s'.includes(content.size))
    return (
      <div>
        <div id='s'></div>
      </div>
    )
    if ('m'.includes(content.size))
    return (
      <div>
        <div id='m'></div>
      </div>
    );
    if ('g'.includes(content.size))
    return (
      <div>
        <div id='g'></div>
      </div>
    );
}

export default Spacer;