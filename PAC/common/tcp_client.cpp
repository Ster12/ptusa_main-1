#include "tcp_client.h"

#ifdef WIN_OS
#include "w_tcp_client.h"
#endif //WIN_OS

#ifdef LINUX_OS
#include "l_tcp_client.h"
#endif


tcp_client::tcp_client( const char* client_ip, unsigned int client_port, unsigned int client_id, unsigned char alarm_subclass, unsigned int exchange_buf_size /*= 256*/, unsigned long send_receive_timeout /*= 100*/ )
    {
    ip = new char[16];
    strcpy(ip, client_ip);
    port = client_port;
    id = client_id;
    subclass = alarm_subclass;
    buff = new char[exchange_buf_size];
    buff_size = exchange_buf_size;
    timeout = send_receive_timeout;
    async_timeout = send_receive_timeout * 2;
    connectTimeout = send_receive_timeout;
    reconnectTimeout = send_receive_timeout * RECONNECT_MIN_MULTIPLIER;
    maxreconnectTimeout = send_receive_timeout * RECONNECT_MAX_MULTIPLIER;
    socket_number = 0;
    connectedstate = 0;
    is_initialized = 0;
    async_result = 0;
    async_queued = 0;
    async_last_connect_try = 0;
    }

tcp_client::~tcp_client()
    {
    delete [] ip;
    ip = nullptr;
    delete [] buff;
    buff = nullptr;
    }

tcp_client* tcp_client::Create( char* ip, unsigned int port, unsigned int id, unsigned char alarm_subclass, unsigned int exchange_buf_size /*= 256*/, unsigned long send_receive_timeout /*= 100*/ )
    {
#if defined WIN_OS
    return new win_tcp_client(ip, port, id, alarm_subclass, exchange_buf_size, send_receive_timeout);

#elif defined LINUX_OS
    return new linux_tcp_client(ip, port, id, alarm_subclass, exchange_buf_size, send_receive_timeout);

#else
    return 0;
#endif
    }

int tcp_client::Communicate( unsigned int bytestosend )
    {
    return 0;
    }

int tcp_client::get_id()
    {
    return id;
    }

int tcp_client::AsyncSend( unsigned int bytestosend )
    {
    async_result = AR_BUSY;
    tcp_communicator::get_instance()->add_async_client(this);
    return 0;
    }

int tcp_client::get_async_result()
    {
    return async_result;
    }

int tcp_client::get_connected_state()
	{
	return connectedstate;
	}

int tcp_client::get_socket()
    {
    return socket_number;
    }

int tcp_client::set_async_result( int ar )
    {
    async_result = ar;
    return ar;
    }
