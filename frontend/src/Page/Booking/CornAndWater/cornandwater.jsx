import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";
function CornAndWater() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="9">
              <Card className="card-plain">
                <CardHeader>
                 <h1>Đồ uống</h1>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                         
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cocacola</td>
                        <td>25.000</td>
                        <td></td>
                        
                      </tr>
                      <tr>
                        <td>Bắp</td>
                        <td>20.000</td>
                        <td></td>
                        
                      </tr>
                      <tr>
                        <td>Combo 1 bắp + 2 nước</td>
                        <td>60.000</td>
                        <td></td>
                        
                      </tr>
                      <tr>
                        <td>Combo 2 bắp + 2 nước</td>
                        <td>80.000</td>
                        <td></td>
                        
                      </tr>
                      
                      
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }


export default CornAndWater;