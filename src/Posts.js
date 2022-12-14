import React from "react";

function Post(props) {
	const [savePost, setSavePost] = React.useState(false);
	const [like, setLike] = React.useState(false);
	const [likeCount, setLikeCount] = React.useState(props.likedCount);

	function dislikePost() {
		setLike(false);
		setLikeCount(likeCount - 1);
	}

	function likePost() {
		setLike(true);
		setLikeCount(likeCount + 1);
	}

	return (
		<div class="post">
			<div class="top">
				<div class="user">
					<img src={props.usrImg} alt="profile" />
					{props.usrName}
				</div>
				<div class="actions">
					<ion-icon name="ellipsis-horizontal"></ion-icon>
				</div>
			</div>

			<div class="content">
				<img onDoubleClick={likePost} src={props.pstImg} alt="post" />
			</div>

			<div class="background">
				<div class="actions">
					<div>
						{like ? <ion-icon onClick={dislikePost} class="red" name="heart"></ion-icon> : <ion-icon onClick={likePost} name="heart-outline"></ion-icon>}
						<ion-icon name="chatbubble-outline"></ion-icon>
						<ion-icon name="paper-plane-outline"></ion-icon>
					</div>
					<div>{savePost ? <ion-icon onClick={() => setSavePost(false)} name="bookmark"></ion-icon> : <ion-icon onClick={() => setSavePost(true)} name="bookmark-outline"></ion-icon>}</div>
				</div>

				<div class="likes">
					<img src={props.likedByImg} alt="liked by" />
					<div class="text">
						Curtido por <strong>{props.likedBy}</strong> e <strong>outras {likeCount.toLocaleString('pt-BR')} pessoas</strong>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Posts() {
	const posts = [
		{ usrImg: "assets/img/meowed.svg", usrName: "meowed", pstImg: "assets/img/gato-telefone.svg", likedByImg: "assets/img/respondeai.svg", likedBy: "respondeai", likedCount: 101523 },
		{ usrImg: "assets/img/barked.svg", usrName: "barked", pstImg: "assets/img/dog.svg", likedByImg: "assets/img/adorable_animals.svg", likedBy: "adorable_animals", likedCount: 99159 },
	];

	return (
		<div class="posts">
			{posts.map((p) => (
				<Post usrImg={p.usrImg} usrName={p.usrName} pstImg={p.pstImg} likedByImg={p.likedByImg} likedBy={p.likedBy} likedCount={p.likedCount} />
			))}
		</div>
	);
}
