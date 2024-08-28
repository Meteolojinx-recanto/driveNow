import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const style = {
  header: 'flex items-center justify-items-start space-x-36 p-6 bg-white sticky top-0 left-0 right-0 z-50',
  leftContainer: 'flex items-center justify-around',
  img: 'flex-shrink-0',
  nav: '', 
  navLink: 'text-black font-medium py-2 px-4 rounded-lg transition-color',
  info: '',
  phone: 'font-bold text-xl tracking-wide',
  text: 'font-thin text-[#777D94] text-xs'
};

const Header = () => {
  return (
    <header className={style.header}>
        <Link href='/'>
          <div className={style.img}>
            <Image src='/assets/logo.png' alt='Logo' width={168} height={36} />
          </div>
        </Link>
        <nav className={style.nav}>
          <Link href='/' className={style.navLink}>
            Главная
          </Link>
          <Link href='/' className={style.navLink}>
            Сервис
          </Link>
          <Link href='/' className={style.navLink}>
            Аренда
          </Link>
          <Link href='/' className={style.navLink}>
            Контакты
          </Link>
        </nav>
      <div className={style.info}>
        <p className={style.text}>У вас есть какие-либо вопросы?</p>
        <p className={style.phone}>+7 776 339 02 02</p>
      </div>
    </header>
  );
};

export default Header;
