import { List, Card, Icon, Statistic, Divider } from 'antd';

import { Link } from 'routes';

const HotelsList = ({ items }) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 2,
      }}
      dataSource={items}
      renderItem={item => (
        <Link route={`/hotels/${item.id}`}>
          <a>
            <List.Item>
              <Card
                title={item.title}
                cover={
                  <img
                    alt={item.cover.tag}
                    src={item.cover.url}
                  />
                }
                actions={[
                  <Icon type="facebook" />,
                  <Icon type="instagram" />,
                ]}
              >
                <Card.Meta
                  title={item.demand}
                  description={item.location.address}
                  style={{
                    overflowY: 'auto',
                    height: '70px',
                  }}
                />
                <Divider />
                <Statistic title="Rating" value={item.rating.average} suffix=" / 10" />
                <Divider />
                <Statistic title="Price" value={item.price.amount} suffix={item.price.currency} />
              </Card>
            </List.Item>
          </a>
        </Link>
      )}
    />
  );
};

export default HotelsList;
