import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { ExtractJwt, Strategy } from 'passport-jwt';

import config from '../../config/config';
import UserRepository from '../../database/repositories/user.repository';

import { JwtPayload } from './jwt.constants';

@Injectable()
export default class JwtAccessStrategy extends PassportStrategy(
  Strategy,
  'jwt-access',
) {
  private _userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.auth.jwt.access.secret,
    });

    this._userRepository = userRepository;
  }

  async validate(payload: JwtPayload) {
    if (!payload.id) {
      return null;
    }

    const user = await this._userRepository.findOne(payload.id);
    return user;
  }
}
