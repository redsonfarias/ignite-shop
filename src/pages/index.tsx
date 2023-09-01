import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { useKeenSlider } from 'keen-slider/react'
import { Handbag } from '@phosphor-icons/react'

import {
  HomeContainer,
  LeftIcon,
  RightIcon,
  Product,
  BagContainer,
} from '@/styles/pages/home'

import 'keen-slider/keen-slider.min.css'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface Props {
  products: IProduct[]
}

export default function Home({ products }: Props) {

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 48
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 48
        }
      },
      "(min-width: 2560px)": {
        slides: {
          perView: 3,
          spacing: 48
        }
      },
    },
  })

  function prevProduct() {
    instanceRef?.current?.prev()
  }

  function nextProduct() {
    instanceRef?.current?.next()
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            className="keen-slider__slide"
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product>
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <p>{product.price}</p>
                </div>
                <BagContainer>
                  <Handbag size={32} color="white" />
                </BagContainer>
              </footer>
            </Product>
          </Link>
        ))}

        <LeftIcon onClick={prevProduct} />
        <RightIcon onClick={nextProduct} />
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format((price.unit_amount ?? 0) / 100)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formattedPrice,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
