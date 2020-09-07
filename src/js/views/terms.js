import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/terms.scss";
import companyLogo from "../../img/supergig-logo.png";

export const Terms = () => {
	return (
		<div className="terms-container">
			<p className="terms-intro">
				<h2>Introduction</h2>
				Welcome to SuperGig! These terms and conditions outline the rules and regulations for the use of
				SuperGigs Website, platform and open source portals located at Github, Gitlab, Repl.it or Gitpod.io.
				<br />
				<br />
				By accessing SuperGig we assume you accept these terms and conditions. Do not continue to use SuperGig
				if you do not agree to take all of the terms and conditions stated on this page.
				<br />
				<br />
				The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice
				and all Agreements: Client, You and Your refers to you, the person log on this website and compliant to
				the Companys terms and conditions. The Company, Ourselves, We, Our and Us, refers to our Company. Party,
				Parties, or Us, refers to both the Client and ourselves. All terms refer to the offer, acceptance and
				consideration of payment necessary to undertake the process of our assistance to the Client in the most
				appropriate manner for the express purpose of meeting the Clients needs in respect of provision of the
				Companys stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of
				the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are
				taken as interchangeable and therefore as referring to same.
			</p>
			<hr />
			<p className="terms-cookies">
				<h2>Cookies</h2>
				We employ the use of cookies. By accessing SuperGig, you agreed to use cookies in agreement with the
				SuperGigs Privacy Policy. Most interactive websites use cookies to let us retrieve the users details for
				each visit. Cookies are used by our website to enable the functionality of certain areas to make it
				easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
			</p>
			<hr />
			<p className="terms-license">
				<h2>License</h2>
				Unless otherwise stated, SuperGig and/or its licensors own the intellectual property rights for all
				material on SuperGig. All intellectual property rights are reserved. You may access this from SuperGig
				for your own personal use subjected to restrictions set in these terms and conditions. You must not:
				<br />
				<br />
				<ul>
					<li>Republish material from SuperGig</li>
					<li>Sell, rent or sub-license material from SuperGig</li>
					<li>Reproduce, duplicate or copy material from SuperGig</li>
					<li>Redistribute content from SuperGig</li>
				</ul>
				This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to
				post and exchange opinions and information in certain areas of the website. SuperGig does not filter,
				edit, publish or review Comments prior to their presence on the website. Comments do not reflect the
				views and opinions of SuperGig, its agents and/or affiliates. Comments reflect the views and opinions of
				the person who post their views and opinions. To the extent permitted by applicable laws, SuperGig shall
				not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a
				result of any use of and/or posting of and/or appearance of the Comments on this website. SuperGig
				reserves the right to monitor all Comments and to remove any Comments which can be considered
				inappropriate, offensive or causes breach of these Terms and Conditions.
			</p>
			<hr />
			<p className="terms-hyperlinking">
				<h2>Hyperlinking To Our Content</h2>
				The following organizations may link to our Website without prior written approval:
				<br />
				<br />
				<ul>
					<li>Government agencies;</li>
					<li>Search engines;</li>
					<li>News organizations;</li>
					<li>
						Online directory distributors may link to our Website in the same manner as they hyperlink to
						the Websites of other listed businesses;
					</li>
					<li>
						and System wide Accredited Businesses except soliciting non-profit organizations, charity
						shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
					</li>
				</ul>
				These organizations may link to our home page, to publications or to other Website information so long
				as the link:
				<br />
				<br />
				<ul>
					<li>(a) is not in any way deceptive;</li>
					<li>
						(b) does not falsely imply sponsorship, endorsement or approval of the linking party and its
						products and/or services;{" "}
					</li>
					<li>(c) and fits within the context of the linking party’s site. </li>
				</ul>
				We may consider and approve other link requests from the following types of organizations:
				<br />
				<br />
				<ul>
					<li>commonly-known consumer and/or business information sources; </li>
					<li>dot.com community sites;</li>
					<li>associations or other groups representing charities;</li>
					<li>online directory distributors;</li>
					<li>internet portals; </li>
					<li>accounting, law and consulting firms; </li>
					<li>and educational institutions and trade associations.</li>
				</ul>
				If you are one of the organizations listed in paragraph 2 above and are interested in linking to our
				website, you must inform us by sending an e-mail to SuperGig. Please include your name, your
				organization name, contact information as well as the URL of your site, a list of any URLs from which
				you intend to link to our Website, and a list of the URLs on our site to which you would like to link.
				Wait 2-3 weeks for a response. Approved organizations may hyperlink to our Website as follows: By use of
				our corporate name; or By use of the uniform resource locator being linked to; or By use of any other
				description of our Website being linked to that makes sense within the context and format of content on
				the linking partys site. No use of SuperGigs logo or other artwork will be allowed for linking absent a
				trademark license agreement.
			</p>
			<hr />
			<p className="terms-liability">
				<h2>Content Liability</h2>
				We shall not be hold responsible for any content that appears on your Website. You agree to protect and
				defend us against all claims that is rising on your Website. No link(s) should appear on any Website
				that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or
				advocates the infringement or other violation of, any third party rights.
			</p>
			<hr />
			<p className="terms-reservation">
				<h2>Reservation Of Rights</h2>
				We reserve the right to request that you remove all links or any particular link to our Website. You
				approve to immediately remove all links to our Website upon request. We also reserve the right to amen
				these terms and conditions and it’s linking policy at any time. By continuously linking to our Website,
				you agree to be bound to and follow these linking terms and conditions.
			</p>
			<hr />
			<p className="terms-disclaimer">
				<h2>Disclaimer</h2>
				To the maximum extent permitted by applicable law, we exclude all representations, warranties and
				conditions relating to our website and the use of this website. Nothing in this disclaimer will:
				<br />
				<br />
				<ul>
					<li>
						Limit or exclude our or your liability for death or personal injury; limit or exclude our or
						your liability for fraud or fraudulent misrepresentation;{" "}
					</li>
					<li>
						Limit any of our or your liabilities in any way that is not permitted under applicable law; or
						exclude any of our or your liabilities that may not be excluded under applicable law.
					</li>
				</ul>
				The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
				<br />
				<br />
				<ul>
					<li>(a) are subject to the preceding paragraph; </li>
					<li>
						(b) and govern all liabilities arising under the disclaimer, including liabilities arising in
						contract, in tort and for breach of statutory duty.
					</li>
				</ul>
				As long as the website and the information and services on the website are provided free of charge, we
				will not be liable for any loss or damage of any nature.
			</p>
			<div className="aboutUs-company-logo-container d-flex justify-content-center">
				<img className="aboutUs-company-logo" src={companyLogo} href="#" />
			</div>
		</div>
	);
};
