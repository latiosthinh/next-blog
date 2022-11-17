import Image from "next/image"

export default function Card({title, excerpt, imgUrl} : {title: string, excerpt: string, imgUrl: string}) {
	return (
		<article className='mb-10 border-solid border-2 border-indigo-600'>
			<Image src={imgUrl} alt={title} width={400} height={400} />

			<h2>{title}</h2>
			<p>{excerpt}</p>
		</article>
	)
}