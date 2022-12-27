import {promisify} from "util";

import {redis} from "../../db";
import SettingModel from "../../models/settings";

import {MAX_AGE_EMAIL} from "../../constants";
import {sendMessageSMTP} from "../messages";
import {generateLink} from "../../helpers/generate-link";
import {templateHtml} from "../messages/template";
import {paramsSMTP} from "../messages/params-smtp";

export const forgotPasswordService = async (url, email) => {
  const fromName = await SettingModel.findOne({where: {name: 'FROM_NAME'}});
  const fromEmail = await SettingModel.findOne({where: {name: 'FROM_EMAIL'}});
  const replyToEmail = await SettingModel.findOne({where: {name: 'REPLY_TO_EMAIL'}});

  const link = generateLink();

  const html = templateHtml('reset', {
    link: url + link
  });

  await sendMessageSMTP(
    paramsSMTP(
      email,
      html,
      url + link,
      "You've requested a password reset",
      fromEmail.dataValues.value,
      fromName.dataValues.value,
      replyToEmail.dataValues.value
    )
  );

  await promisify(redis.set).bind(redis)(link, email);
  await promisify(redis.expire).bind(redis)(link, MAX_AGE_EMAIL);
}
