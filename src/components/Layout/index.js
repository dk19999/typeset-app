import Header from '../Header';
import Sidebar from '../Sidebar';

export default function Layout(props) {
  return (<>

    <section>
      <Header/>
      <Sidebar/>
      <main className='content'>
        {props.children}
      </main>
    </section>
      
  </>);
}
