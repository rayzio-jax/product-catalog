import { Link } from "react-router-dom";
import React from "react";
import "./style/Footer.scss";

export default function Footer() {
	return (
		<div id="links" className="link-box">
			<p className="text-black font-poppins text-xl md:text-4xl m-4">
				Sumbergedang Products
			</p>
			<Link to={"/katalog"}>
				<button
					className="text-white text-sm font-roboto md:tracking-wider 
					rounded-[9px] text-base md:text-xl btn-catalog"
				>
					Produk UMKM
				</button>
			</Link>
			<a
				className="none"
				href="http://kknsumbergedang2018.blogspot.com/p/profil-desa-sumber-gedang.html"
			>
				<button
					className="text-white text-sm  font-roboto md:tracking-wider 
					rounded-[9px] text-base md:text-xl btn-catalog w-fit"
				>
					Profil Desa
				</button>
			</a>
		</div>
	);
}