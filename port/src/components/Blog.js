// src/components/Blog.js
import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const initialPosts = [
    { date: 'Jan 20, 2026', title: 'Mastering Next.js Server Components', category: 'Full Stack' },
    { date: 'Jan 15, 2026', title: 'Why GraphQL is essential for modern APIs', category: 'Backend' },
    { date: 'Jan 08, 2026', title: 'Dockerizing your React Application', category: 'DevOps' },
];

const Blog = () => {
    const [posts, setPosts] = React.useState(initialPosts);
    const [newPost, setNewPost] = React.useState({ title: '', category: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost(prev => ({ ...prev, [name]: value }));
    };

    const handleAddPost = (e) => {
        e.preventDefault();
        if (!newPost.title || !newPost.category) return;

        const date = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
        setPosts([{ date, title: newPost.title, category: newPost.category }, ...posts]);
        setNewPost({ title: '', category: '' });
    };

    return (
        <section id="blog" className="blog-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Recent posts</h2>
                    <div className="line"></div>
                    <a href="#blog" className="view-all">View all</a>
                </motion.div>

                {/* Create Post Section */}
                <motion.div
                    className="create-post-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleAddPost} className="create-post-form">
                        <input
                            type="text"
                            name="title"
                            placeholder="Post Title"
                            value={newPost.title}
                            onChange={handleInputChange}
                            className="create-post-input"
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={newPost.category}
                            onChange={handleInputChange}
                            className="create-post-input"
                        />
                        <button type="submit" className="create-post-btn">Add Post</button>
                    </form>
                </motion.div>

                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            className="blog-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="blog-meta">
                                <span className="blog-category">{post.category}</span>
                                <span className="blog-date">{post.date}</span>
                            </div>
                            <h3 className="blog-title">{post.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
