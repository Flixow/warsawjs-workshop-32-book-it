import { Fragment } from 'react';
import { Empty, Card, Icon, List, Comment, Divider } from 'antd';

const HotelItem = ({ item }) => {
  return item.id ? (
    <Fragment>
      <Card
        title={item.title}
        actions={[
          <Icon type="facebook" />,
          <Icon type="instagram" />,
        ]}
      >
        <img
          alt={item.cover.tag}
          src={item.cover.url}
          width={350}
        />
        <Divider />
        <Card.Meta
          title={item.demand}
          description={item.location.address}
          style={{
            overflowY: 'auto',
            height: '70px',
          }}
        />
      </Card>

      <h3>Insights:</h3>
      <List
        className="comment-list"
        header={`${item.insights.length} replies`}
        itemLayout="horizontal"
        dataSource={item.insights}
        renderItem={item => (
          <li>
            <Comment
              actions={item.actions}
              author={item.tag}
              content={item.text}
            />
          </li>
        )}
      />
    </Fragment>
  ) : (
    <Empty />
  );
};

export default HotelItem;
