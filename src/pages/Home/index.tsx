import React, { useState, useEffect } from 'react';
import { Button, Table, Input } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import './index.scss';

const ClientManagement = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const intl = useIntl();

  const columns: any = [
    {
      title: <FormattedMessage id="customer_username" defaultMessage="客户名字" />,
      dataIndex: 'username',
    },
    {
      title: <FormattedMessage id="createAt" defaultMessage="创建时间" />,
      dataIndex: 'created_at',
      render: (text: any) => moment(text).format('YYYY-MM-DD HH:mm:ss')
    }
  ]
  // 获取列表
  const getList = () => {
    setLoading(true);
    setData([]);
    setLoading(false);
    setTotal(1);
  }

  // 翻页
  const handleTableChange = (pagination: any) => {
    setPagination(pagination);
  }
  
  
  // 表哥多选
  const onSelectChange = (Keys: any) => {
    setSelectedRowKeys(Keys);
  }
  

  useEffect(() => {
    getList()
  },[JSON.stringify(pagination)])

  return (
    <div className="page_wrapper client_management">
      <div className="client_management_header">
        <div className="client_management_header_search">
          <Input
            value={keyword}
            placeholder={intl.formatMessage({id: "please_enter_keyword", defaultMessage: "请输入关键字"})}
            allowClear
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button type="link" onClick={getList}>
            <FormattedMessage id="search" defaultMessage="搜索" />
          </Button>
        </div>
      </div>
      <Table
        rowKey="username"
        columns={columns}
        dataSource={data}
        pagination={{...pagination, total}}
        loading={loading}
        onChange={handleTableChange}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
      />
    </div>
  )
}

export default ClientManagement;