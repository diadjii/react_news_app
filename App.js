
import React, { Component } from 'react';

import { FlatList } from 'react-native';

import  {getNews} from './src/new';

import Article  from './src/components/Article';




export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {articles: [],refreshing: true};
    this.fetchNews = this.fetchNews.bind(this);
  }

//Called after the component is mounted

  componentDidMount(){
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}
