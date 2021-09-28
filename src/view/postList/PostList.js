import React, { useMemo, useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Input, List, Space, Tag } from 'antd';
import { fetchPosts, updateSearchFilter } from '../../store/postList/actions'
import { getPostList, getAfterKey } from '../../store/postList/selectors'
import styles from './PostList.module.css';

const { Search } = Input;

const useConnect = () => {
  const postList = useSelector((state) => getPostList(state))
  const afterKey = useSelector((state) => getAfterKey(state))

  const mapState = {
    postList,
    afterKey
  }

  const dispatch = useDispatch()

  const mapDispatch = useMemo(
    () => ({
      handleFetchPosts: (afterKey) => dispatch(fetchPosts(afterKey)),
    }),
    [dispatch]
  )

  return {
    ...mapState,
    ...mapDispatch
  }
}

const PostList = memo(() => {
  const {
    postList,
    afterKey,
    handleFetchPosts
  } = useConnect()

  const [filter, setFilter] = useState("")
  const [viewPost, setViewPost] = useState(null)

  useEffect(() => {
    handleFetchPosts(afterKey)
  }, []);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      handleFetchPosts(afterKey)
    }
  }

  const onSearch = (value) => {
    setFilter(value)
    console.log(value);
  }

  return (
    <div>
    {viewPost ? (
      <div
        style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", overflow: "scroll"}}
      >
        <div style={{ margin: "10px"}}>
          {viewPost.data.url && viewPost.data.url!=="default" && viewPost.data.url!=="self" && (
            <img src={viewPost.data.url} />
          )}
          <div>
            {viewPost.data.content_categories &&
            viewPost.data.content_categories.map((item) => (
              <Tag>{item}</Tag>
            ))}
          </div>
          <div>
            Upvotes: {viewPost.data.score}
          </div>
          <div>
            Author: {viewPost.data.author}
          </div>
          <div>
            Title: {viewPost.data.title}
          </div>
          <Button onClick={() => setViewPost(null)}>
            Back to List
          </Button>
        </div>
      </div>
    ) : (
      <div
        onScroll={(e) => handleScroll(e)}
        style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", overflow: "scroll"}}
      >
        <div style={{ marginTop: "10px", marginRight: "10px", marginLeft: "10px"}}>
          <h1>
            /r/ Pics Image Viewer!
          </h1>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
        <List
          itemLayout="horizontal"
          dataSource={postList.filter(post => post.data.title.indexOf(filter) >= 0)}
          renderItem={item => (
            <List.Item>
              <div onClick={() => setViewPost(item)} style={{marginLeft: "10px", display: "flex", alignItems: "center"}}>
                {item.data.thumbnail && item.data.thumbnail!=="default" && item.data.thumbnail!=="self" && (
                  <img src={item.data.thumbnail} />
                )}
                <div style={{marginLeft: "10px"}}>
                  {item.data.title}
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    )}
    </div>
  );
})

export default PostList

/*
<List
  itemLayout="horizontal"
  dataSource={Object.values(orderList)}
  renderItem={item => (
    <List.Item
      style={{ backgroundColor: item.minutesSinceOrderPlaced < 30 ? colorCodes[0] : item.minutesSinceOrderPlaced < 75 ? colorCodes[1] : colorCodes[2], marginTop: "5px", borderRadius: "10px" }}
    >
      <List.Item.Meta
        title={<div>Order Id: {item.id}, Time Since Order Placed: {Math.floor(item.minutesSinceOrderPlaced/60)}:{Math.floor(item.minutesSinceOrderPlaced%60)}</div>}
        description={`Items: ${item.items.join(", ")}`}
        style={{ marginLeft: "5px" }}
      />
    </List.Item>
  )}
/>
*/
