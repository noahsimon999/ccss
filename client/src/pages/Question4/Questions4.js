import React, { Component } from "react";
import API from "../../utils/API";
import { ListItem } from "../../components/List";
import Cards from "../../components/Card";
import "./Question4.css"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

class AnswerFeed extends Component {
    state = {
        answersIndustry: [],
        answers: [],
        email: "",
        industry: ""
    };

    componentDidMount() {
        this.loadAnswers()
    }

    loadAnswers() {

        API.getAnswersByQuest("values")
            .then(res => {
                this.setState({
                    answers: res.data
                })
            })

    }

    render() {
        return (
            <div className="question4Background">
                <div className="question4Header">
                    <h1 className="question4Title">What are your values?</h1>
                    <div className="questionNav">
                        <Nav />
                    </div>
                </div>
                <div className="container question4Container">

                    {/* <Row>
                        <Input
                            s={12}
                            type='select'
                            name="industry"
                            onChange={this.handleInputChange}
                            label="Industry"
                            defaultValue='2'
                            placeholder="Choose Industry">
                            <option value='All'>All Industries</option>
                            <option value='Music'>Music</option>
                            <option value='Art'>Art</option>
                            <option value='Entrepreneurship'>Entrepreneurship</option>
                        </Input>
                    </Row> */}
                    {this.state.answers.map((answer) =>
                        <Cards>
                            <ListItem key={answer._id}>
                                <p>{answer.answer}</p>
                                <hr></hr>
                                <h4>by {answer.email}</h4>
                                <h4>Industry: {answer.industry}</h4>
                            </ListItem>
                        </Cards>
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}

export default AnswerFeed;
