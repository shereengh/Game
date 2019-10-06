import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title
} from "native-base";
export default function App() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon
              type="

              Entypo"
              name="
camera"
            />
          </Button>
        </Left>
        <Body>
          <Title>InstaCoded</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              type="FontAwesome"
              name="
location-arrow"
            />
          </Button>
        </Right>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                }}
              />
              <Body>
                <Text>ReactNative</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://media.licdn.com/dms/image/C4D0BAQHLyZXsUy3iaw/company-logo_200_200/0?e=2159024400&v=beta&t=S_5-JHuojwlJxNHjGWaz1dj5TkdcMOWC9Mm0rzvrYFo"
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon
                  active
                  name="md-heart-empty"
                  type="
Ionicons"
                />
              </Button>
              <Button transparent>
                <Icon active name="comment-o" type="FontAwesome" />
              </Button>
              <Button transparent>
                <Icon
                  active
                  name="
location-arrow"
                  type="FontAwesome"
                />
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
