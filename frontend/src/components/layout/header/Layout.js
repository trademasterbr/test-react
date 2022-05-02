import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div className='containerBody'>{props.children}</div>
    </div>
  );
}
