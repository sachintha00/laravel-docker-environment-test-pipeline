#!/usr/bin/make

include .env


.PHONY: ssh
ssh:
	ssh -i $(SSH_PRIVATE_KEY_PATH) ${SSH_USER}@${SSH_IP}

copy-files:
	scp -r -i $(SSH_PRIVATE_KEY_PATH) \
	prod \
	${SSH_USER}@${SSH_IP}:/root/tpd/

push:
	ssh-copy-id -i ./ssh/tpd.pub ${SSH_USER}@${SSH_IP}
