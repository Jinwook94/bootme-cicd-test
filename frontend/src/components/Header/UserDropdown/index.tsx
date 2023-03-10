import { Popover } from 'antd';
import React from 'react';

import { BookmarkIcon, LogoutIcon, ProfileIcon } from '../../../constants/icons';
import { useLogin } from '../../../hooks/useLogin';
import PATH from '../../../constants/path';
import { Link } from 'react-router-dom';
import {
  ContentWrapper,
  Figcaption,
  Figure,
  IconWrapper,
  Item,
  Items,
  LinkItem,
  LogoutButton,
  NickName,
  NickNameButton,
  Occupation,
  TextWrapper,
} from './style';

const UserDropDown = ({ nickName, profileImage }: UserDropDownProps) => {
  const content = () => {
    const { handleLogOut } = useLogin();
    return (
      <ContentWrapper>
        <Figure>
          <img
            width="42"
            height="42"
            src={profileImage ?? ''}
            alt="profile"
            style={{ borderRadius: '8px', objectFit: 'cover', marginRight: '15px' }}
          />
          <Figcaption>
            <NickName> {nickName} </NickName>
            <Occupation> 취준생 / 백엔드 </Occupation>
          </Figcaption>
        </Figure>
        <Items>
          <Item>
            <LinkItem>
              <IconWrapper>
                <ProfileIcon />
              </IconWrapper>
              프로필 관리
            </LinkItem>
          </Item>
          <Item>
            <LinkItem>
              <IconWrapper>
                <BookmarkIcon />
              </IconWrapper>
              <Link to={PATH.BOOKMARKS}>북마크 코스</Link>
            </LinkItem>
          </Item>
        </Items>
        <LogoutButton>
          <IconWrapper>
            <LogoutIcon />
          </IconWrapper>
          <TextWrapper onClick={handleLogOut}>로그아웃</TextWrapper>
        </LogoutButton>
      </ContentWrapper>
    );
  };

  return (
    <Popover content={content} trigger="click" placement="bottomRight">
      <>
        <NickNameButton>{nickName}님</NickNameButton>
      </>
    </Popover>
  );
};

export default UserDropDown;

interface UserDropDownProps {
  profileImage: string | null;
  nickName: string | null;
}
