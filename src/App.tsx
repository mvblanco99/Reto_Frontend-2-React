import imageDesktop from './assets/assets/images/illustration-sign-up-desktop.png';
import imageMobile from './assets/assets/images/illustration-sign-up-mobile.png';
import iconList from './assets/assets/images/icon-list.svg';
import Title from './components/atoms/Title/Title';
import Paragraph from './components/atoms/Paragraph/Paragraph';
import List from './components/molecules/List/List';
import Form from './components/molecules/Form/Form';
import Email from './components/atoms/Input/Email/Email';
import Submit from './components/atoms/Input/Submit/Submit';


function App() {
 
  return (
    <div className="w-full bg-background sm:h-screen flex items-center">
      <div className="grid grid-cols-1 gap-y-6 bg-white mx-auto sm:grid-cols-2 
        sm:w-[95%] sm:rounded-[30px] desktop:w-[80%] lg:w-[60%] xl:w[50%] 
        desktop-large:w-[47.5%] 2xl:w-[45%]">
        
        <div className='w-full h-72 sm:order-2 sm:h-fit sm:pr-5 sm:py-6'>
          {/* Corregir esto */}
            <img src={imageMobile} alt="" className='sm:hidden w-full h-full'/>
            <img src={imageDesktop} alt="" className='hidden sm:block'/>
        </div>

        <div className='sm:py-6 flex items-center'>
          <div className='flex flex-wrap gap-y-6 items-center mx-auto pl-2 w-[80%]'>
            <Title level={1} title='Stay updated!'/>
            <Paragraph text='Join 60,000+ product managers receiving monthly updates on:'/>
            <List info={[
              {text:'Product discovery and building what matters',icon:iconList},
              {text:'Measuring to ensure updates are a success',icon:iconList},
              {text:'And much more!',icon:iconList},
            ]}/>

            <Form>
              <Email label='Email address' placeholder='email@company.com'/>
              <Submit bg='bg-purple_dark' colorText='text-white' value='Subscribe to monthly newsletter'/>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
