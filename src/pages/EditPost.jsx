import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components/index";
import appwriteService from "../appwrite/appwrite_config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return posts ? (
    <div className="py-8">
      <Container>
        <PostForm post={posts} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
